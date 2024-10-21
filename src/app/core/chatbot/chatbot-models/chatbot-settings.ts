export class ChatbotSettings {
    model: string;
    connectionName: string;
    stream: boolean;
    useOptions: boolean;
    options: ChatbotOptions;

    public static simpleDefaultOptions: ChatbotOptions = {
        seed: 0,
        top_k: 20,
        top_p: 0.9,
        temperature: 0.8,
        repeat_penalty: 1.2,
        stop: [],
    };

    public static completeDefaultOptions: ChatbotOptions = {
        seed: 0,
        top_k: 20,
        top_p: 0.9,
        temperature: 0.8,
        repeat_penalty: 1.2,
        stop: [],
        num_keep: 5,
        num_predict: 100,
        min_p: 0.0,
        tfs_z: 0.5,
        typical_p: 0.7,
        repeat_last_n: 33,
        presence_penalty: 1.5,
        frequency_penalty: 1.0,
        mirostat: 1,
        mirostat_tau: 0.8,
        mirostat_eta: 0.6,
        penalize_newline: true,
        numa: false,
        num_ctx: 1024,
        num_batch: 2,
        num_gpu: 0,
        main_gpu: 0,
        low_vram: false,
        f16_kv: true,
        vocab_only: false,
        use_mmap: true,
        use_mlock: false,
        num_thread: 8,
    };

    constructor(
        model: string,
        apiProvider: string,
        stream: boolean,
        useOptions: boolean,
        options: ChatbotOptions
    ) {
        this.model = model;
        this.connectionName = apiProvider;
        this.stream = stream;
        this.useOptions = useOptions;
        this.options = options;
    }
}

export interface ChatbotOptions {
    // Required
    seed: number;
    top_k: number;
    top_p: number;
    temperature: number;
    repeat_penalty: number;
    stop: string[];

    // Optional
    num_keep?: number | null;
    num_predict?: number | null;
    min_p?: number | null;
    tfs_z?: number | null;
    typical_p?: number | null;
    repeat_last_n?: number | null;
    presence_penalty?: number | null;
    frequency_penalty?: number | null;
    mirostat?: number | null;
    mirostat_tau?: number | null;
    mirostat_eta?: number | null;
    penalize_newline?: boolean | null;
    numa?: boolean | null;
    num_ctx?: number | null;
    num_batch?: number | null;
    num_gpu?: number | null;
    main_gpu?: number | null;
    low_vram?: boolean | null;
    f16_kv?: boolean | null;
    vocab_only?: boolean | null;
    use_mmap?: boolean | null;
    use_mlock?: boolean | null;
    num_thread?: number | null;
}

export enum ChatbotOptionsLevel {
    Simple = 'simple',
    Complete = 'complete'
}
