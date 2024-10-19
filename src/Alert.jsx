
export default function Alert(props) {
  return (
    <div>
        {props.alert && <div class="alert alert-success mx-5" role="alert">
            {props.alert}
        </div>}
    </div>
  )
}
