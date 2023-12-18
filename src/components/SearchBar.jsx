import { useState } from "react";

export default ({ objArr, upDateUniversityes }) => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    const arrayFiltrato = objArr.filter((elem) => {
                        if (elem.name.toLowerCase().includes(value.toLowerCase())) {
                            return elem[0];
                        }
                    });
                    console.log(objArr, value);
                    console.log(arrayFiltrato);
                    upDateUniversityes(arrayFiltrato);
                    setValue("");
                }}
            >
                Cerca
            </button>
        </div>
    );
};
