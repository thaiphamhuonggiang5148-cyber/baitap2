function Welcome(props) {
    return (
        <h2 style={{ color: props.textColor }}>
            Chào Mừng {props.name}
        </h2>
    );
}
export default Welcome;