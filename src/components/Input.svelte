<script>
  export let input;
  export let inputs;
  let clicked;
  let value;

  const onClick = () => {
    clicked = !clicked;
  };

  const onSubmit = () => {
    onClick();
    if (!/\S/.test(value) || !value) {
      value = '';
      return;
    }
    input.subject = value;
    value = '';
  };

  const deleteInput = () => {
    inputs = inputs.filter((item) => {
      return item.id !== input.id;
    });
  };
</script>

<label>
  <div class="mb-1 flex items-center justify-between">
    {#if clicked}
      <form
        on:submit|preventDefault={onSubmit}
        class="w-full flex justify-start items-center"
      >
        <input
          class="outline-none px-1 rounded text-black dark:text-white dark:bg-zinc-600"
          placeholder={input.subject}
          bind:value
        />
        <div class="ml-1" on:click={onClick}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 122.879 122.879"
            enable-background="new 0 0 122.879 122.879"
            xml:space="preserve"
            ><g
              ><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#FF4141"
                d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
              /></g
            ></svg
          >
        </div>
      </form>
    {:else}
      <p on:click={onClick} class="w-fit">{input.subject}</p>
    {/if}
    <div
      class="mr-1 opacity-0 hover:opacity-100 transition-all"
      on:click={deleteInput}
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="20px"
        height="20px"
        viewBox="0 0 122.879 122.879"
        enable-background="new 0 0 122.879 122.879"
        xml:space="preserve"
        ><g
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#FF4141"
            d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
          /></g
        ></svg
      >
    </div>
  </div>
  <input
    type="number"
    min="0"
    max="100"
    placeholder="Write your {input.subject} score"
    class="w-full p-2 outline-none border border-slate-600 rounded mb-3 text-black"
    data-testid="score-input"
    bind:value={input.score}
  />
</label>
