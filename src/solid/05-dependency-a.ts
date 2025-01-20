import { PostService } from './05-dependency-b';
import { FecthDataFromApi, JsonDataBaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    //const provider = new JsonDataBaseService() 
    //const provider = new LocalDataBaseService() 
    const provider=new FecthDataFromApi()
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();