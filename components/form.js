
const Form = ({ form, handleChange }) => {

    return ( 
        <div className="col-md-4">
            <form>
                <div className="form-group w-100">
                    <label>Humedad relativa</label>
                    <input value={form.humidity} name="humidity" onChange={(e) => handleChange(e.target.name, e.target.value)} type="text" className="form-control" /> 
                </div>
            
            </form>
        </div>
     );
}
 
export default Form;