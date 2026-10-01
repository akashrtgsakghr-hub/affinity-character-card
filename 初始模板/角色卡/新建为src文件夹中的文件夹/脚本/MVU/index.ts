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
>>>>>>> a3cb78b63bdf702a635b6e770e4a9bba040fb8b5
