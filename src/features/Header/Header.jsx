import { useState } from 'react';
import Logo from '../../ui/Logo';
import Navbar from './Navbar';
import Icons from './Icons';
import Slider from './Slider';

function Header() {
  const [slider, setSlider] = useState(false);

  function handleSliderOut() {
    setSlider(true);
  }

  function handleSlideIn() {
    setSlider(false);
  }

  return (
    <header className="relative flex justify-between items-center h-[70px] px-3 bg-stone-300">
      <Logo />

      {/* NAVBAR */}
      <Navbar />

      {/* ICONS */}
      <Icons onSliderOut={handleSliderOut} />

      {/* SLIDER */}
      <Slider slider={slider} onSliderIn={handleSlideIn} />
    </header>
  );
}

export default Header;
