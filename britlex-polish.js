
(() => {
  const sticky = document.querySelector('.blx-sticky-cta');
  const contacts = document.querySelector('#contacts');
  const toggleSticky = () => {
    if (!sticky || !contacts) return;
    if (window.innerWidth > 767) {
      sticky.style.opacity = '0';
      sticky.style.pointerEvents = 'none';
      return;
    }
    const contactsTop = contacts.getBoundingClientRect().top + window.scrollY;
    const current = window.scrollY;
    const show = current > 420 && current < contactsTop - 240;
    sticky.style.opacity = show ? '1' : '0';
    sticky.style.pointerEvents = show ? 'auto' : 'none';
  };
  if (sticky) {
    sticky.style.transition = 'opacity .22s ease';
    toggleSticky();
    window.addEventListener('scroll', toggleSticky, { passive: true });
    window.addEventListener('resize', toggleSticky);
  }
})();
