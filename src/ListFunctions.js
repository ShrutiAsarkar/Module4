import axios from "axios";

export const getList = () => {
    return axios
        .get("http://localhost/5000/api/tasks", {
            headers: {"Content-Type": "application/json"}
        })
        .then(res =>{
            return res.data;
        })
}

export const addToList = term =>{
    return axios
        .post("http://localhost:5000/api/tasks",
            {title: term},
            {
            headers: {"Content-Type": "application/json"}
        })
        .then(res =>{
            return res.data;
        })
}

export const deleteItem = term =>{
    axios
        .delete(`http://localhost:5000/api/task/${term}`,
            {
                headers: {"Content-Type": "application/json"}
            })
        .then(res =>{
            console.log(res);
        })
        .catch((error) =>  {
            console.log(error)
        })
}

export const updateItem = term =>{
    return axios
        .put ("http://localhost:5000/api/task",
            {title: term},
            {
                headers: {"Content-Type": "application/json"}
            })
        .then(res =>{
            return res.data;
        })
}

