export function ChangeMobileVer(props) {
  if( props.indexOf(' show') === -1 ) {
    return props + ' ' + 'show';
  } else {
    return props.replace(' show', '');
  }
}