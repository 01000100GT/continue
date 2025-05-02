// 导入必要的Path模块
use std::path::Path;
// 从sync库中导入Sync模块的Tag类型和sync函数，避免与std::sync冲突
use sync::sync::{Tag, sync as sync_fn};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 创建Tag实例，包含要同步的目录、分支和提供者信息
    let tag = Tag {
        dir: Path::new("../manual-testing-sandbox"),
        branch: "test",
        provider_id: "default",
    };

    // 调用sync函数进行同步，返回四种类型的文件列表
    let (compute, delete, add_label, remove_label) = sync_fn(&tag)?;
    println!("需计算: {} 文件", compute.len());
    println!("需删除: {} 文件", delete.len());
    println!("添加标签: {} 文件", add_label.len());
    println!("移除标签: {} 文件", remove_label.len());

    Ok(())
}
