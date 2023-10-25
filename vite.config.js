import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Style from "vite-plugin-style";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), Style()],
});
