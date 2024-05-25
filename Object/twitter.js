const post={
    username:"@___shubham__07",
    content:"The sky is in your palm and when you open the palm the sky has no limit",
    likes:899,
    repost:5,
    tags:["@Ashishranjane","@pavanRanjane"]
};
console.log(post["username"]);

post.tags.splice(0,1,"@amitRanjane");

console.log(post.tags);

let repost="repost";

console.log(post[repost]);