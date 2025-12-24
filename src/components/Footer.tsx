const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
