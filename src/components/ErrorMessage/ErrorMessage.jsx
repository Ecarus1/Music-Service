const ErrorMessage = () => {
    const picture = "image/error/Error.png";
    return(
        <img style={{ display: "block", width: "250px", height: "250px",
            objectFit: "contain", margin: "0 auto" }}
        src={picture} alt="Error" />
    );
};

export default ErrorMessage;