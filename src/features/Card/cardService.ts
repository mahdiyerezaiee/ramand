import http  from "../../Services/httpService";

export const GeCardPackageGroupService=()=>{

    return http.get("https://jsonplaceholder.typicode.com/posts")
}