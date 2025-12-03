import Component from "./component.mjs";

function createTeleport(data) {
    return {
        ...Component.createComponent(data),
        pairId: data[3].trim()
    };
}

const Teleport = {
    createTeleport
};

export default Teleport;