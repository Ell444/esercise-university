import { useState } from "react"



export default ({ universityInfo, setUniversities }) => {
    const [value, setValue] = useState('')
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button
                onClick={() => {
                    const filteredArray = universityInfo.filter((uni) => {
                        if (uni.name.toLowerCase().includes(value.toLowerCase()) && uni) {
                            return uni
                        };
                    });
                    setUniversities(filteredArray);
                    setValue('');
                }}
            >Cerca</button>
        </div>
    );
};