import img1 from "../../assets/Imagem do WhatsApp de 2025-01-13 à(s) 23.14.31_320f6d0e.jpg";

export const Modal = () => {
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <div>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={img1}
            alt="Lulu do Mal"
          />
        </div>
      </div>
    </>
  );
};