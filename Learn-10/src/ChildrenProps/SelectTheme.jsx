
const SelectTheme = (props) => {
  const changeTheme = () => {
    const data = document.getElementById("go").value;

    if (data == "dark") {
      props.setTheme("dark");
    }

    if (data == "light") {
      props.setTheme("light");
    }
  };

  return (
    <select
      id="go"
      onChange={changeTheme}
      className="bg-amber-200 p-5 flex items-center justify-center rounded-2xl shadow-xl shadow-gray-300 cursor-pointer active:scale-95"
    >
      <option>Choose Theme</option>
      <option value="light">Light Theme</option>
      <option value="dark">Dark Theme</option>
    </select>
  );
};

export default SelectTheme;
