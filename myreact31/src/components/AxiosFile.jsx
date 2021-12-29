import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";




const { useState, useEffect } = require("react");

function AxiosFile() {
    const [profileList, setProfileList] = useState([]);
    
	useEffect(() => {Axios
		.get("https://classdevopscloud.blob.core.windows.net/data/profile-list.json")
		.then((response) => {
			// reponse는 axios 객체
			// response.data => 응답 내용
			setProfileList(response.data);
		})
		.catch((error) => {
			console.error(error);
		})
}, []);
    return 
		<>
        (profileList.map((profile)=> profile)
		</>


export default AxiosFile;