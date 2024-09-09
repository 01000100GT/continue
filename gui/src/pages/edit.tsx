import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { JSONContent } from "@tiptap/core";
import { InputModifiers } from "core";
import { getBasename } from "core/util";
import { usePostHog } from "posthog-js/react";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { defaultBorderRadius, vscForeground } from "../components";
import FileIcon from "../components/FileIcon";
import resolveEditorContent from "../components/mainInput/resolveInput";
import TipTapEditor from "../components/mainInput/TipTapEditor";
import { IdeMessengerContext } from "../context/IdeMessenger";
import { setEditDone, setEditStatus } from "../redux/slices/editModeState";
import { RootState } from "../redux/store";
import { getMetaKeyLabel } from "../util";
import { NewSessionButton } from "./chat";

const TopDiv = styled.div`
  overflow-y: auto;
  height: 100%;
  scrollbar-width: none;

  padding-top: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AcceptRejectButton = styled.button<{
  backgroundColor: string;
  disabled: boolean;
}>`
  border: none;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${defaultBorderRadius};
  padding: 8px 16px;
  color: ${vscForeground};
  width: 100%;
  text-align: center;
  margin: 0 8px;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

function Edit() {
  const posthog = usePostHog();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ideMessenger = useContext(IdeMessengerContext);

  const [showCode, setShowCode] = useState(false);

  const editModeState = useSelector((state: RootState) => state.editModeState);

  useEffect(() => {
    if (editModeState.editStatus === "done") {
      ideMessenger.request("edit/escape", undefined);
      navigate("/");
    }
  }, [editModeState.editStatus]);

  if (!editModeState.highlightedCode) {
    return null;
  }

  return (
    <>
      <TopDiv>
        <div className="max-w-3xl m-auto">
          <div className="flex px-2 relative">
            <TipTapEditor
              toolbarOptions={{
                hideAddContext: true,
                hideImageUpload: true,
                hideUseCodebase: true,
                enterText: ["streaming", "accepting"].includes(
                  editModeState.editStatus,
                )
                  ? "Retry"
                  : "Edit",
              }}
              placeholder={
                ["streaming", "accepting"].includes(editModeState.editStatus)
                  ? "Enter instructions for edit"
                  : "Enter follow-up instructions"
              }
              border={`1px solid #aa0`}
              availableContextProviders={[]}
              availableSlashCommands={[]}
              isMainInput={true}
              onEnter={async function (
                editorState: JSONContent,
                modifiers: InputModifiers,
              ): Promise<void> {
                const [_, __, prompt] = await resolveEditorContent(
                  editorState,
                  {
                    noContext: true,
                    useCodebase: false,
                  },
                  ideMessenger,
                  [],
                );
                ideMessenger.request("edit/sendPrompt", {
                  prompt,
                  range: editModeState.highlightedCode,
                });
                dispatch(setEditStatus("streaming"));
              }}
              header={
                <div
                  className="p-1"
                  style={{
                    backgroundColor: "#fff2",
                  }}
                >
                  <div
                    className="flex cursor-pointer"
                    onClick={() => {
                      ideMessenger.ide.showLines(
                        editModeState.highlightedCode.filepath,
                        editModeState.highlightedCode.range.start.line,
                        editModeState.highlightedCode.range.end.line,
                      );
                      setShowCode(!showCode);
                    }}
                  >
                    {/* Filename header */}
                    <FileIcon
                      filename={editModeState.highlightedCode.filepath}
                      height={"18px"}
                      width={"18px"}
                    ></FileIcon>
                    {getBasename(editModeState.highlightedCode.filepath)} (
                    {editModeState.highlightedCode.range.start.line}-
                    {editModeState.highlightedCode.range.end.line})
                  </div>
                </div>
              }
            ></TipTapEditor>
          </div>
        </div>

        <div className="mt-2">
          <NewSessionButton
            onClick={async () => {
              dispatch(setEditDone());
            }}
            className="mr-auto flex items-center gap-2"
          >
            <ArrowLeftIcon width="11px" height="11px" />
            Back to chat
          </NewSessionButton>
        </div>

        {["accepting", "streaming"].includes(editModeState.editStatus) && (
          <div className="flex w-full my-8">
            <AcceptRejectButton
              disabled={editModeState.editStatus !== "accepting"}
              backgroundColor="#28a74588"
              onClick={() => {
                ideMessenger.request("edit/acceptReject", {
                  accept: true,
                  onlyFirst: false,
                  filepath: editModeState.highlightedCode.filepath,
                });
                dispatch(setEditDone());
              }}
            >
              {getMetaKeyLabel()}⇧⏎ Accept all
            </AcceptRejectButton>
            <AcceptRejectButton
              disabled={editModeState.editStatus !== "accepting"}
              backgroundColor="#dc354588"
              onClick={() => {
                ideMessenger.request("edit/acceptReject", {
                  accept: false,
                  onlyFirst: false,
                  filepath: editModeState.highlightedCode.filepath,
                });
                dispatch(setEditDone());
              }}
            >
              {getMetaKeyLabel()}⇧⌫ Reject all
            </AcceptRejectButton>
          </div>
        )}
      </TopDiv>
    </>
  );
}

export default Edit;
