import CustomerForm from "../../components/Forms/CustomerForm";
import "./Customers.css";

export default function Customers() {
  return (
    <div className="customers-main">
      <h1>Customers</h1>
      <CustomerForm />
    </div>
  );
}
