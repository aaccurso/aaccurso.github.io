import service from './service';
import component from './component';

export default {
	component,
	service,
	bootstrap () {
		this.component.bootstrap();
	}
};
