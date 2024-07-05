const cityServices = require("../mock_data/cityServices");
exports.fetchCityServices = async (req, res, next) => {
    try {
        const serviceType = req?.query?.serviceType?.toLowerCase();
        const search = req?.query?.search?.toLowerCase();
        let finalOutput = cityServices;

        if (serviceType && search) {
            finalOutput = cityServices.filter(x => {
                return x?.type?.toLowerCase() === serviceType && x.name?.toLowerCase?.includes(search);
            });
        } else if (serviceType) {
            finalOutput = cityServices.filter(x => {
                return x?.type?.toLowerCase === serviceType;
            });
        } else if (search) {
            finalOutput = cityServices.filter(x => {
                return x.name?.toLowerCase?.includes(search);
            });
        }

        return res.status(200).json({
            success: true,
            data: finalOutput
        });
    } catch (error) {
        next(error);
    }
};

exports.fetchCityServicesTypes = async (req, res, next) => {
    try {
        const serviceTypes = cityServices.map(x => x.type);
        return res.status(200).json({
            success: true,
            data: [...new Set(serviceTypes)]
        });
    } catch (error) {
        next(error);
    }
};