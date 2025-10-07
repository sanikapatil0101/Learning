import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise ((resolve)=> setTimeout(resolve,300))
    console.log("Submitting the form:", data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First name</label>
          <br />
          <input
            {...register('firstname', {
              required: { value: true, message: "First name is required" },
              minLength: { value: 3, message: "Please enter a valid name" },
              maxLength: { value: 50, message: "Name is too long" },
            })}
          />
          {errors.firstname && <p style={{ color: "red" }}>{errors.firstname.message}</p>}
        </div>

        <div>
          <label>Middle name</label>
          <br />
          <input {...register('middlename')} />
        </div>

        <div>
          <label>Last name</label>
          <br />
          <input {...register('lastname')} />
        </div>

        <br />
        <input type="submit"disabled={isSubmitting} />
      </form>
    </>
  );
}

export default App;
