import { useSelector } from "react-redux";
const MyComponent = () => {
  // Отримуємо необхідну частину стану
  const value = useSelector(state => state.some.value);
};
