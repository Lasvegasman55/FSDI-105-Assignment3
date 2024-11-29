class Service {
    constructor(description, price) {
        this.description = description;
        this.price = price;
    }
}

$(document).ready(function() {
    // Load services from local storage
    const loadServices = () => {
        const services = JSON.parse(localStorage.getItem('services')) || [];
        return services;
    };

    // Save services to local storage
    const saveServices = (services) => {
        localStorage.setItem('services', JSON.stringify(services));
    };

    // Initialize an array to store services
    const services = loadServices();

    // Form submission event
    $('#service-form').on('submit', function(event) {
        event.preventDefault();

        // Get form values
        const description = $('#service-description').val();
        const price = parseFloat($('#service-price').val());

        // Validate form values
        if (description && price) {
            // Create a new service object
            const newService = new Service(description, price);
            services.push(newService);
            saveServices(services);

            // Clear the form
            $('#service-form')[0].reset();

            // Display notification
            $('#service-notification').fadeIn().delay(2000).fadeOut();
        } else {
            alert("Please fill out all fields");
        }
    });
});
