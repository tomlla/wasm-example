
preinstall:
	cargo install wasm-pack

wasm:
	wasm-pack build --target web --out-dir pkg
