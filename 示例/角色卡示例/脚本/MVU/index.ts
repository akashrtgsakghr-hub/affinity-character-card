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
>>>>>>> 78eb7a3ba462a0fa917dd6ac64129b4b43acd14c
