import { useState } from 'react';

/**
 * @example A hook for toggling boolean state of a value
 * import 'hooks/useToggle';
 *
 * const [value, toggle, toggleOn, toggleOff]  = useToggle(false);
 *
 * @param {Boolean} initialValue
 */

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  const toggleOn = () => setValue(true);
  const toggleOff = () => setValue(false);

  return [value, toggle, toggleOn, toggleOff];
};
