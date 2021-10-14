import React, { useEffect, useState } from "react";

const JsonApi = () => {
	const [data, setData] = useState([]);

	const getApiData = async () => {
		const apiData = await fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json());
		setData(apiData.slice(0,50));
	};

	useEffect(() => {
		getApiData();
	}, []);

	return (
		<div className="App" style={{ display: "flex", flexWrap: "wrap", flexDirection: 'row' }}>
			{data.length === 0 ? null : (
                data.map(d => {
                    return(
                        <div style={{width: '250px', height: '250px'}} key={d.id}>
                            <h1>{d.id}</h1>
                            <p>{d.title}</p>
                            <img src={d.thumbnailUrl} alt='Not found...'/>
                        </div>
                    )
                })
            )}
		</div>
	);
};

export default JsonApi;
