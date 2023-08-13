import { Formik, Form, Field, ErrorMessage } from "formik"
import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

function NotesForm() {

    const { add } = useContext(NotesContext);

    return(
        <Formik
        initialValues={{title: "", message:""}}
        validate={ values => {
            const errors = {};
            if(!values.title){
                errors.title = "The title is required"
            } else if(!values.message){
                errors.message = "The message is required"
            }
            return errors;
        }}
        onSubmit={
            (values, { setSubmitting }) => {
                add(values.title, values.message);
                setSubmitting(false);
                values.title = "";
                values.message = "";
            }
        }
        >
            {
                ({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <Field type="text" name="title" />
                            <ErrorMessage name="title" component="p" />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <Field type="textarea" name="message" />
                            <ErrorMessage name="message" component="p" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>{ isSubmitting ? "Saving.." : "Save" }</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default NotesForm;