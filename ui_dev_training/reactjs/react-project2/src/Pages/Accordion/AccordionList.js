import React from "react";

function AccordionList({accordionData, handleToggle, toggle}) {
    return(
        accordionData.map((value) => {
            const { id, qn, ans } = value;
            return(
                <div className="card" key={id}>
                    <div className="card-header" onClick={() => handleToggle(id)} style={{cursor: "pointer"}}><strong>{(id === toggle ? " - " : " + ")}{qn}</strong>
                    </div>

                    {(id === toggle ? <div className="card-body">{ans}</div> : "")}
                </div>
            )
        })
    )
}

export default AccordionList;