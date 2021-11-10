const posts = [ 
    "Bugün hava çok güzel!", 
    "Okula gitmeliyim.", 
    "Akşam Fenerbahçe - Beşiktaş derbisi var", 
    "Yarın matematik sınavım var." ];

const listPosts = () => {
    posts.map((post) => {
        console.log(post);
    });
};

const addPost = (newPost) => {
    const promiseBook = new Promise((resolve, reject) => {
        if (newPost !== "") {
            posts.push(newPost);
            resolve(posts);
        } else {
            reject("Hatalı post!!!");
        }
    });

    return promiseBook
};

async function showPosts() {
    try {
        console.log("---------POST LISTESI------------");
        listPosts();
        console.log("------Yeni POST-----: ( Bugün çok sıkıldım... ) listeye ekleniyor...");
        await addPost("Bugün çok sıkıldım......");
        console.log("---------YENI POST LISTESI------------");
        listPosts();
    } catch (error) {
        console.log(error);
    }
};

showPosts();
    






