function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright ⓒ {year} by{" "}
        <a
          href="https://github.com/myselfsatyam"
          target="_blank"
          rel="noopener noreferrer"
        >
          @myselfsatyam
        </a>
      </p>
    </footer>
  );
}

export default Footer;
