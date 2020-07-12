class avatarsPreviewSidebar {
    constructor(){
        const sidebar = `
        <div class="preview-avatars-wrapper">
            <div class="sidebar hidden">
                <div class="section avatars-section">
                    <h2 class="title">Avatars</h2>
                    <div class="grid">
                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1263950/ebe6b674deca163b28423e3b925bd36b0f0f357b.png" alt="profile" class="grid-item avatar-frame">
                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1263950/175875a819256fdeb4a2f4bf1b124afba6c3e2e3.png" alt="profile" class="grid-item avatar-frame">
                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1263950/77a5bfca9dcc44e2e3aaaabea62249407f9f4ec0.png" alt="profile" class="grid-item avatar-frame">
                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/c30260bb120bf1379f075802653c8eb86da7a7e9.png" alt="profile" class="grid-item avatar-frame">
                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/c2a822b6422d7a2c9e72ec74bf54139db8723ef0.png" alt="profile" class="grid-item avatar-frame">
                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/08763b38c214a554b5e83c5a39a048495b6ecee6.png" alt="profile" class="grid-item avatar-frame">
                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1263950/8472d7295ca91f42faaae0fb9143b2d94bd5b719.png" alt="profile" class="grid-item avatar-frame">
                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/rewardsseason1/goldenprofile/presige_frame_anim.png?v=2" alt="profile" class="grid-item avatar-frame">
                    </div>
                </div>
            </div>
            <button>></button>
        </div>
        `;
        const sidebarCss = `<style>.preview-avatars-wrapper {height: 100vh;position: absolute;top: 0;}.preview-avatars-wrapper .sidebar {height: 100%;width: 260px;transition: 0.5s all ease;position: absolute;padding: 20px;background: #222e3b;background: linear-gradient(45deg, #222e3b 0%, #020024 100%);border-radius: 0 20px 20px 0;}.preview-avatars-wrapper .sidebar .section .title {color: #bdbdbd;font-family: "Motiva Sans", Sans-serif;font-weight: 200;margin-bottom: 20px;text-align: center;}.preview-avatars-wrapper .sidebar .section .grid {display: flex;justify-content: space-evenly;flex-wrap: wrap;}.preview-avatars-wrapper .sidebar .section .grid .grid-item {width: 40%;height: 100px;margin-bottom: 20px;cursor: pointer;}.preview-avatars-wrapper .sidebar.hidden {opacity: 0;left: -100%;z-index: 0;}.preview-avatars-wrapper .sidebar.shown {opacity: 1;left: 0;z-index: 999;}.preview-avatars-wrapper > button {padding: 20px 5px;border-radius: 0 10px 10px 0;border: none;background-color: rgba(104, 157, 221, 0.6);background-size: 110%;cursor: pointer;color: #fff;font-weight: 700;font-size: 110%;position: absolute;top: 200px;left: 0;transition: 0.4s all linear;outline: none;}.preview-avatars-wrapper > button.expanded {left: 300px;}</style>`;
        document.querySelector('.responsive_page_template_content .profile_page').append(this.htmlToElement(sidebar));
        document.querySelector('.responsive_page_template_content .profile_page').append(this.htmlToElement(sidebarCss));

        this.userAvatar = document.querySelector('.profile_header_content .playerAvatarAutoSizeInner');
    }

    htmlToElement(html) {
        let template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

    handleAvatarFrameClick(avatarFrame){
        const frameSrc = avatarFrame.src;
        this.addAvatarFrame(frameSrc);
    }

    addAvatarFrame(frameSrc){
        this.removeAvatarFrame();
        const frame = `<div class="profile_avatar_frame">
            <img src="${frameSrc}">
        </div>`;
        this.userAvatar.insertAdjacentElement('afterbegin', this.htmlToElement(frame));
    }

    removeAvatarFrame(){
        const frame = this.getAvatarFrame();
        if(frame){
            frame.parentNode.removeChild(frame);
        }
    }

    getAvatarFrame(){
        return this.userAvatar.querySelector('.profile_avatar_frame');
    }
}

;(function(){
    const previewSidebar = new avatarsPreviewSidebar();
    const wrapper = document.querySelector('.preview-avatars-wrapper');
    const sidebar = wrapper.querySelector('.preview-avatars-wrapper .sidebar');
    const button = wrapper.querySelector('.preview-avatars-wrapper > button');
    
    button.addEventListener('click', function () {
        sidebar.classList.toggle('hidden');
        sidebar.classList.toggle('shown');
        button.classList.toggle('expanded');
    });

    sidebar.addEventListener('click', function(e){
        if(e.target.classList.contains('grid-item')){
            if(e.target.classList.contains('avatar-frame')){
                previewSidebar.handleAvatarFrameClick(e.target);
            }
        }
    });
})();
