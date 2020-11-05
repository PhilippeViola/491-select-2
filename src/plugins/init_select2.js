// 1. import the plugin
import $ from 'jquery';
import 'select2';

// 2. create the function
const initSelect2 = () => {
    // this is the same as
    // document.querySelector('.select2').select2()
    const options = {
        width: '100%'
    };

    $('.select2').select2(options);
};

// 3. export the function
export { initSelect2 };
