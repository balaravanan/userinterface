import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "../components/ReactTagsDemo.css"

function ReactTagsDemo() {
  const [selected, setSelected] = useState(["papaya"]);

  return (
    <div>
       <h1>Tag Jai</h1>
       <div style={{marginLeft:"40%"}}>
<TagsInput
  value={selected}
  onChange={setSelected}
  name="fruits"
  placeHolder="enter name"
/>
</div>
    </div>
  )
}

export default ReactTagsDemo
