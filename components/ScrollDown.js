import { useRouter } from 'next/router';

const ScrollDown = ({ target }) => {
  const router = useRouter();

  const scrollToTarget = () => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    scrollToTarget();
    router.push(`#${target}`);
  };

  return (
    <button onClick={handleClick} className="scroll-down-button">
      Scroll Down
    </button>
  );
};

export default ScrollDown;