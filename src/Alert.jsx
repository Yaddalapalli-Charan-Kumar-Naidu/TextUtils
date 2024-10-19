
export default function Alert(props) {
  return (
    <div>
        {props.alert && <div className="alert alert-success mx-5" role="alert">
            {props.alert}
        </div>}
    </div>
  )
}
