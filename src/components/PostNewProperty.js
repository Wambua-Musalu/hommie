import { useForm } from "../customHooks"

const PostNewProperty = () => {
    const [value, setValue] = useForm({location : "", description:""})
    return (
        <>
            <div className = "property-post">
                <div className = "wrapper">
                    <form>
                        <select>
                        Select Property Type 
                        <optgroup>
                            <option > Land</option>
                            <option>Apartment Building</option>
                            <option>PrivateHouse</option>
                            <option>Rental Building</option>
                        </optgroup>
                        </select>
                        <input 
                            type = "text" 
                            onChange = {setValue}
                            value = {value.location}
                            placeholder = "Property Location"
                             />
                        <textarea 
                            placeholder = "Brief Description "
                            value = {value.description}>
                            
                        </textarea>

                    </form>
                </div>
            </div>
        </>
    )
}

export default PostNewProperty
