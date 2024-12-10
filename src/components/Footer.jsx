const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} E-Premier. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
