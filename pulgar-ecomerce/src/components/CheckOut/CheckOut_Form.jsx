//Componente que muestra formulario de datos de persona que comprará.
const Checkout_Form = ({ formData, handleInputChange, handleSubmit }) => (
  <div className="col-md-7">
    <h2>Datos del Comprador</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Apellidos
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="address" className="form-label">
          Dirección de Envío
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="phoneNumber" className="form-label">
          Número de Teléfono
        </label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Confirmar Compra
      </button>
    </form>
  </div>
);

export default Checkout_Form;
