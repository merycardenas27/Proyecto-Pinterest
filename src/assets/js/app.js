'use strict';



const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    wrapper.append(Board());

    root.append(wrapper);
};

const state = {
    user: null,
    creator_board: null,
    board: null,
    pins: null,
    current_pin: "AZvD2sZHc13NAEh_yzBNFXT2gG8Ev5dHlBFLxorpuq7RIFTL66qnsJI"
};


$(_ => {

    getJSON(generate_url("board", "web-ui"), (err, json) => {
        if (err) {
            return alert(err.message);
        }
        state.board = json.data;
        console.log(state.board);
    });

    const root = $('.root');

    render(root);

});
