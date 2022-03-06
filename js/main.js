"use strict"; {
    const open = document.getElementById("open");
    const close = document.getElementById("close");
    const mask = document.getElementById("mask");
    const modal = document.getElementById("modal");

    // openがタップされたら、maskとmodalのhiddenを外す
    open.addEventListener("click", () => {
        mask.classList.remove("hidden");
        modal.classList.remove("hidden");
    });

    // closeがタップされたら、maskとmodalにhiddenを付ける
    close.addEventListener("click", () => {
        mask.classList.add("hidden");
        modal.classList.add("hidden");
    });
}