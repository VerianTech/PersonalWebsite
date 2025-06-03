export const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (element) {
	  element.scrollIntoView({ behavior: 'smooth' });

	  element.classList.add('bg-blue-100', 'transition-all', 'duration-300');
    
	  setTimeout(() => {
		element?.classList.remove('bg-blue-100');
	  }, 500);
	} else {
	  console.warn(`Element with id "${sectionId}" not found`);
	}
};

export const openPopUp = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (element) {
	  element.scrollIntoView({ behavior: 'smooth' });

	  element.classList.add('bg-blue-100', 'transition-all', 'duration-300');
    
	  setTimeout(() => {
		element?.classList.remove('bg-blue-100');
	  }, 500);
	} else {
	  console.warn(`Element with id "${sectionId}" not found`);
	}
};