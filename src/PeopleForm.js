// import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';

const PeopleForm = ({ kisiler, submitFn, notify }) => {
   const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
      mode:"onChange", defaultValues:{
      title:"",
      aciklama:"",
      people:[],
  
    }});


  // const [isim, setIsim] = useState("");
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (kisiler.includes(isim)) {
  //     setError("Bu isim daha önce eklenmiş")
  //   } else {
  //     setError(null)
  //   }
  // }, [isim, kisiler])

  // function handleIsimChange(e) {
  //   setIsim(e.target.value);
  // }

  function onSubmit(data) {
    // e.preventDefault();
    // setIsim("");
    submitFn(data.title);
    notify(`${data.title} takım üyelerine eklendi!`)
    reset();
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          İsim
        </label>
        <input
          className="input-text"
          id="title"
     {...register("title",{required:"Bir isim girmelisiniz",minLength:{value:3, message:"İsim en az 3 karakter olmalı" }})}
          type="text"
          // onChange={handleIsimChange}
          // value={isim}
        />
      {errors.title && <p className="input-error">{errors.title?.message}</p>}
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={!isValid}
        >
          Ekle
        </button>
      </div>
    </form>
  );
};
//     <form className="taskForm" onSubmit={handleSubmit}>
//       <div className="form-line">
//         <label className="input-label" htmlFor="title">
//           İsim
//         </label>
//         <input
//           className="input-text"
//           id="title"
//           name="title"
//           type="text"
//           onChange={handleIsimChange}
//           value={isim}
//         />
//         <p className="input-error">{error}</p>
//       </div>

//       <div className="form-line">
//         <button
//           className="submit-button"
//           type="submit"
//           disabled={isim.length === 0 || error}
//         >
//           Ekle
//         </button>
//       </div>
//     </form>
//   );
// };

export default PeopleForm;
