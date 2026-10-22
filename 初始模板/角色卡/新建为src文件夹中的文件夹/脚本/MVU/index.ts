<<<<<<< HEAD
$(() => {
  const scriptId = 'magvarupdate-bundle';
  if (document.getElementById(scriptId)) {
    return;
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.src = 'https://testingcf.jsdelivr.net/gh/MagicalAstrogy/MagVarUpdate/artifact/bundle.js';
  script.async = true;
  document.head.appendChild(script);
});
=======
import 'https://testingcf.jsdelivr.net/gh/MagicalAstrogy/MagVarUpdate/artifact/bundle.js';
>>>>>>> 9aadd35b2a8c888b756179046743cbf920a1a0c8
