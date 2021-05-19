
let collection = fetch('collection.json')
    .then(response => response.json())
    .then((data) => {
        //recuperar y crear las rows de los grupos 
        let groupCollection = data.Collection.map(function (title, index, arr) {
            let template1 = function () {
                return `
            <div class="collection" id=${index}>
                <div class="group_header">
                            <p class="group_name" id="group_name">${title.GroupName}</p>
                            <div class="group_actions">
                                <button class="button_terciary">Edit</button>
                                <button class="button_terciary">Open</button>
                                <button class="drop_down"><img class="chevron" src="./assets/chevron-down.png" alt=""></button>
                            </div>
                </div>
                <div class="tab_collection"></div>
                <div class="divider"></div>
            </div>`
            };
            return template1();
        });
        document.querySelector('#group').innerHTML = groupCollection;

        //recuperar y crear las rows de los links
        let a = data.Collection
        for (let i = 0; i < a.length; i++) {
            let collectionId = document.getElementsByClassName('collection')[i].id
            let index = a[i].index
            let links = a[i].links
            if (collectionId == index) {
                let linkArrey = ``;
                for (let i = 0; i < links.length; i++) {
                    let template = `<div class="group_links">
                        <a class="link_info">
                        <img id="link_favicon" src="${links[i].favicon}" alt="favicon">
                        <p id="link_title">${links[i].page_title}</p>
                        <p id="link_url">${links[i].url}</p>
                        </a>
                        <div class="link-actions">
                        <button class="button_terciary">Open</button>
                        <img class="close" src="./assets/close.png" alt="">
                        </div>
                        </div>`
                    linkArrey += template
                };
                document.querySelector(`#${CSS.escape(collectionId)} > .tab_collection`).innerHTML = linkArrey;
            }
        }
    })
    .catch(error => console.log(error))