import * as wasm from './rust_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
* @param {string} received
* @param {Function} action
* @param {Function} progress
* @param {string} hero_base
* @param {string} required
* @param {string} acc
*/
export function cal(received, action, progress, hero_base, required, acc) {
    var ptr0 = passStringToWasm0(received, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(hero_base, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(required, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(acc, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    wasm.cal(ptr0, len0, addHeapObject(action), addHeapObject(progress), ptr1, len1, ptr2, len2, ptr3, len3);
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

const u32CvtShim = new Uint32Array(2);

const int64CvtShim = new BigInt64Array(u32CvtShim.buffer);

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
* 输出要求（由外部传入）
*/
export class HeroAttrsRequired {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_heroattrsrequired_free(ptr);
    }
    /**
    */
    get dmg() {
        var ret = wasm.__wbg_get_heroattrsrequired_dmg(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set dmg(arg0) {
        wasm.__wbg_set_heroattrsrequired_dmg(this.ptr, arg0);
    }
    /**
    */
    get max_hp() {
        var ret = wasm.__wbg_get_heroattrsrequired_max_hp(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set max_hp(arg0) {
        wasm.__wbg_set_heroattrsrequired_max_hp(this.ptr, arg0);
    }
    /**
    */
    get speed() {
        var ret = wasm.__wbg_get_heroattrsrequired_speed(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set speed(arg0) {
        wasm.__wbg_set_heroattrsrequired_speed(this.ptr, arg0);
    }
    /**
    */
    get crit_power() {
        var ret = wasm.__wbg_get_heroattrsrequired_crit_power(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set crit_power(arg0) {
        wasm.__wbg_set_heroattrsrequired_crit_power(this.ptr, arg0);
    }
    /**
    */
    get crit_rate() {
        var ret = wasm.__wbg_get_heroattrsrequired_crit_rate(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set crit_rate(arg0) {
        wasm.__wbg_set_heroattrsrequired_crit_rate(this.ptr, arg0);
    }
    /**
    */
    get defense() {
        var ret = wasm.__wbg_get_heroattrsrequired_defense(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set defense(arg0) {
        wasm.__wbg_set_heroattrsrequired_defense(this.ptr, arg0);
    }
    /**
    */
    get attack() {
        var ret = wasm.__wbg_get_heroattrsrequired_attack(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set attack(arg0) {
        wasm.__wbg_set_heroattrsrequired_attack(this.ptr, arg0);
    }
    /**
    */
    get effect_hit_rate() {
        var ret = wasm.__wbg_get_heroattrsrequired_effect_hit_rate(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set effect_hit_rate(arg0) {
        wasm.__wbg_set_heroattrsrequired_effect_hit_rate(this.ptr, arg0);
    }
    /**
    */
    get effect_resist_rate() {
        var ret = wasm.__wbg_get_heroattrsrequired_effect_resist_rate(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set effect_resist_rate(arg0) {
        wasm.__wbg_set_heroattrsrequired_effect_resist_rate(this.ptr, arg0);
    }
    /**
    */
    get suit_4() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_heroattrsrequired_suit_4(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            u32CvtShim[0] = r0;
            u32CvtShim[1] = r1;
            const n0 = int64CvtShim[0];
            return n0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {BigInt} arg0
    */
    set suit_4(arg0) {
        int64CvtShim[0] = arg0;
        const low0 = u32CvtShim[0];
        const high0 = u32CvtShim[1];
        wasm.__wbg_set_heroattrsrequired_suit_4(this.ptr, low0, high0);
    }
    /**
    */
    get suit_2() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_heroattrsrequired_suit_2(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            u32CvtShim[0] = r0;
            u32CvtShim[1] = r1;
            const n0 = int64CvtShim[0];
            return n0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {BigInt} arg0
    */
    set suit_2(arg0) {
        int64CvtShim[0] = arg0;
        const low0 = u32CvtShim[0];
        const high0 = u32CvtShim[1];
        wasm.__wbg_set_heroattrsrequired_suit_2(this.ptr, low0, high0);
    }
}
/**
* 精简的固定式神属性（由外部传入）
*/
export class HeroAttrsStatic {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_heroattrsstatic_free(ptr);
    }
    /**
    */
    get max_hp() {
        var ret = wasm.__wbg_get_heroattrsrequired_dmg(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set max_hp(arg0) {
        wasm.__wbg_set_heroattrsrequired_dmg(this.ptr, arg0);
    }
    /**
    */
    get speed() {
        var ret = wasm.__wbg_get_heroattrsrequired_max_hp(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set speed(arg0) {
        wasm.__wbg_set_heroattrsrequired_max_hp(this.ptr, arg0);
    }
    /**
    */
    get crit_power() {
        var ret = wasm.__wbg_get_heroattrsrequired_speed(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set crit_power(arg0) {
        wasm.__wbg_set_heroattrsrequired_speed(this.ptr, arg0);
    }
    /**
    */
    get crit_rate() {
        var ret = wasm.__wbg_get_heroattrsrequired_crit_power(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set crit_rate(arg0) {
        wasm.__wbg_set_heroattrsrequired_crit_power(this.ptr, arg0);
    }
    /**
    */
    get defense() {
        var ret = wasm.__wbg_get_heroattrsrequired_crit_rate(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set defense(arg0) {
        wasm.__wbg_set_heroattrsrequired_crit_rate(this.ptr, arg0);
    }
    /**
    */
    get attack() {
        var ret = wasm.__wbg_get_heroattrsrequired_defense(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set attack(arg0) {
        wasm.__wbg_set_heroattrsrequired_defense(this.ptr, arg0);
    }
    /**
    */
    get effect_hit_rate() {
        var ret = wasm.__wbg_get_heroattrsrequired_attack(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set effect_hit_rate(arg0) {
        wasm.__wbg_set_heroattrsrequired_attack(this.ptr, arg0);
    }
    /**
    */
    get effect_resist_rate() {
        var ret = wasm.__wbg_get_heroattrsrequired_effect_hit_rate(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set effect_resist_rate(arg0) {
        wasm.__wbg_set_heroattrsrequired_effect_hit_rate(this.ptr, arg0);
    }
}

export function __wbindgen_json_parse(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export function __wbindgen_string_new(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

export function __wbindgen_number_new(arg0) {
    var ret = arg0;
    return addHeapObject(ret);
};

export function __wbg_call_346669c262382ad7() { return handleError(function (arg0, arg1, arg2) {
    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

